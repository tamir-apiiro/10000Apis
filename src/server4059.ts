
const express = require('express')
import {handler4059} from "./handler4059";
const app = express()
app.get('/4059', handler4059)
app.listen(3000, () => {})
        