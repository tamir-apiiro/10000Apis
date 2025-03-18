
const express = require('express')
import {handler4484} from "./handler4484";
const app = express()
app.get('/4484', handler4484)
app.listen(3000, () => {})
        