
const express = require('express')
import {handler6344} from "./handler6344";
const app = express()
app.get('/6344', handler6344)
app.listen(3000, () => {})
        