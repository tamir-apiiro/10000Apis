
const express = require('express')
import {handler6954} from "./handler6954";
const app = express()
app.get('/6954', handler6954)
app.listen(3000, () => {})
        