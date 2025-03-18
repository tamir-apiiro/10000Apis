
const express = require('express')
import {handler3943} from "./handler3943";
const app = express()
app.get('/3943', handler3943)
app.listen(3000, () => {})
        