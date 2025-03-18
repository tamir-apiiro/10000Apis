
const express = require('express')
import {handler1320} from "./handler1320";
const app = express()
app.get('/1320', handler1320)
app.listen(3000, () => {})
        