
const express = require('express')
import {handler1718} from "./handler1718";
const app = express()
app.get('/1718', handler1718)
app.listen(3000, () => {})
        