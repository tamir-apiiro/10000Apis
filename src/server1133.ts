
const express = require('express')
import {handler1133} from "./handler1133";
const app = express()
app.get('/1133', handler1133)
app.listen(3000, () => {})
        