
const express = require('express')
import {handler1286} from "./handler1286";
const app = express()
app.get('/1286', handler1286)
app.listen(3000, () => {})
        