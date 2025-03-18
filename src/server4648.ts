
const express = require('express')
import {handler4648} from "./handler4648";
const app = express()
app.get('/4648', handler4648)
app.listen(3000, () => {})
        