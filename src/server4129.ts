
const express = require('express')
import {handler4129} from "./handler4129";
const app = express()
app.get('/4129', handler4129)
app.listen(3000, () => {})
        