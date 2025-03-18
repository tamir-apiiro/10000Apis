
const express = require('express')
import {handler4839} from "./handler4839";
const app = express()
app.get('/4839', handler4839)
app.listen(3000, () => {})
        