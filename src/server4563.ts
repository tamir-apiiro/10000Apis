
const express = require('express')
import {handler4563} from "./handler4563";
const app = express()
app.get('/4563', handler4563)
app.listen(3000, () => {})
        