
const express = require('express')
import {handler1317} from "./handler1317";
const app = express()
app.get('/1317', handler1317)
app.listen(3000, () => {})
        