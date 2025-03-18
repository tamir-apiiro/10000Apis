
const express = require('express')
import {handler276} from "./handler276";
const app = express()
app.get('/276', handler276)
app.listen(3000, () => {})
        