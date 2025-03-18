
const express = require('express')
import {handler4367} from "./handler4367";
const app = express()
app.get('/4367', handler4367)
app.listen(3000, () => {})
        