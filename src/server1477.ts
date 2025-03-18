
const express = require('express')
import {handler1477} from "./handler1477";
const app = express()
app.get('/1477', handler1477)
app.listen(3000, () => {})
        