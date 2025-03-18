
const express = require('express')
import {handler1674} from "./handler1674";
const app = express()
app.get('/1674', handler1674)
app.listen(3000, () => {})
        