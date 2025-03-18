
const express = require('express')
import {handler4546} from "./handler4546";
const app = express()
app.get('/4546', handler4546)
app.listen(3000, () => {})
        