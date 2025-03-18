
const express = require('express')
import {handler4299} from "./handler4299";
const app = express()
app.get('/4299', handler4299)
app.listen(3000, () => {})
        