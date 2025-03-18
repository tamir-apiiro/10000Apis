
const express = require('express')
import {handler1399} from "./handler1399";
const app = express()
app.get('/1399', handler1399)
app.listen(3000, () => {})
        