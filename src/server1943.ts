
const express = require('express')
import {handler1943} from "./handler1943";
const app = express()
app.get('/1943', handler1943)
app.listen(3000, () => {})
        