
const express = require('express')
import {handler4826} from "./handler4826";
const app = express()
app.get('/4826', handler4826)
app.listen(3000, () => {})
        