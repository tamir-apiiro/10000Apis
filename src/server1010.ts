
const express = require('express')
import {handler1010} from "./handler1010";
const app = express()
app.get('/1010', handler1010)
app.listen(3000, () => {})
        