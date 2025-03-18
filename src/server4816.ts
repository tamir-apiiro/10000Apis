
const express = require('express')
import {handler4816} from "./handler4816";
const app = express()
app.get('/4816', handler4816)
app.listen(3000, () => {})
        