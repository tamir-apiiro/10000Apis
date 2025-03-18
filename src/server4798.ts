
const express = require('express')
import {handler4798} from "./handler4798";
const app = express()
app.get('/4798', handler4798)
app.listen(3000, () => {})
        