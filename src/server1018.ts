
const express = require('express')
import {handler1018} from "./handler1018";
const app = express()
app.get('/1018', handler1018)
app.listen(3000, () => {})
        