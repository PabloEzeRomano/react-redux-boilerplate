'use strict';

import React, {
  Component
} from 'react';

import brace from '../../node_modules/react-ace/node_modules/brace';
import AceEditor from 'react-ace';

import '../../node_modules/react-ace/node_modules/brace/ext/language_tools';
import '../../node_modules/react-ace/node_modules/brace/mode/javascript';
import '../../node_modules/react-ace/node_modules/brace/theme/monokai';

let langTools = brace.acequire('ace/ext/language_tools');
var customCompleter = {
  getCompletions: function(editor, session, pos, prefix, callback) {
    // your code
    /* for example
     * let TODO = ...;
     * callback(null, [{name: TODO, value: TODO, score: 1, meta: TODO}]);
     */
  }
};
langTools.addCompleter(customCompleter);

class Ace extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.refs.code.editor.setOption('enableBasicAutocompletion', true);
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <AceEditor
              ref="code"
              mode="javascript"
              theme="monokai"
              name="ace_editor"
              value="'use strict';"
              tabSize={2}
              width="100%"
              showGutter={true}
              showPrintMargin={false}
              fontSize={16}
              editorProps={{
                $blockScrolling : Infinity
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Ace;