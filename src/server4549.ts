
const express = require('express')
import {handler4549} from "./handler4549";
const app = express()
app.get('/4549', handler4549)
app.listen(3000, () => {})
        