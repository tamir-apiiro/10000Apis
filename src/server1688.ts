
const express = require('express')
import {handler1688} from "./handler1688";
const app = express()
app.get('/1688', handler1688)
app.listen(3000, () => {})
        