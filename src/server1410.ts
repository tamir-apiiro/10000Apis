
const express = require('express')
import {handler1410} from "./handler1410";
const app = express()
app.get('/1410', handler1410)
app.listen(3000, () => {})
        