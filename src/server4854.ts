
const express = require('express')
import {handler4854} from "./handler4854";
const app = express()
app.get('/4854', handler4854)
app.listen(3000, () => {})
        