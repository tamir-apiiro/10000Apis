
const express = require('express')
import {handler4886} from "./handler4886";
const app = express()
app.get('/4886', handler4886)
app.listen(3000, () => {})
        