
const express = require('express')
import {handler1215} from "./handler1215";
const app = express()
app.get('/1215', handler1215)
app.listen(3000, () => {})
        