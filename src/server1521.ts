
const express = require('express')
import {handler1521} from "./handler1521";
const app = express()
app.get('/1521', handler1521)
app.listen(3000, () => {})
        