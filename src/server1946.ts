
const express = require('express')
import {handler1946} from "./handler1946";
const app = express()
app.get('/1946', handler1946)
app.listen(3000, () => {})
        