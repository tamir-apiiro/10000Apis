
const express = require('express')
import {handler4180} from "./handler4180";
const app = express()
app.get('/4180', handler4180)
app.listen(3000, () => {})
        