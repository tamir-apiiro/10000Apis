
const express = require('express')
import {handler1047} from "./handler1047";
const app = express()
app.get('/1047', handler1047)
app.listen(3000, () => {})
        