
const express = require('express')
import {handler1102} from "./handler1102";
const app = express()
app.get('/1102', handler1102)
app.listen(3000, () => {})
        