
const express = require('express')
import {handler1129} from "./handler1129";
const app = express()
app.get('/1129', handler1129)
app.listen(3000, () => {})
        