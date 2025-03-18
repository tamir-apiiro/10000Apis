
const express = require('express')
import {handler1808} from "./handler1808";
const app = express()
app.get('/1808', handler1808)
app.listen(3000, () => {})
        