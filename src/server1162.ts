
const express = require('express')
import {handler1162} from "./handler1162";
const app = express()
app.get('/1162', handler1162)
app.listen(3000, () => {})
        