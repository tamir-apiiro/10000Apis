
const express = require('express')
import {handler1345} from "./handler1345";
const app = express()
app.get('/1345', handler1345)
app.listen(3000, () => {})
        