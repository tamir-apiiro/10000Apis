
const express = require('express')
import {handler1191} from "./handler1191";
const app = express()
app.get('/1191', handler1191)
app.listen(3000, () => {})
        