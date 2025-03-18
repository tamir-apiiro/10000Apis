
const express = require('express')
import {handler4634} from "./handler4634";
const app = express()
app.get('/4634', handler4634)
app.listen(3000, () => {})
        