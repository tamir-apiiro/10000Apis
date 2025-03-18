
const express = require('express')
import {handler4438} from "./handler4438";
const app = express()
app.get('/4438', handler4438)
app.listen(3000, () => {})
        