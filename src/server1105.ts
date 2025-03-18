
const express = require('express')
import {handler1105} from "./handler1105";
const app = express()
app.get('/1105', handler1105)
app.listen(3000, () => {})
        