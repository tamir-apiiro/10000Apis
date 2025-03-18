
const express = require('express')
import {handler1473} from "./handler1473";
const app = express()
app.get('/1473', handler1473)
app.listen(3000, () => {})
        