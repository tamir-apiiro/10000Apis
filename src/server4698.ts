
const express = require('express')
import {handler4698} from "./handler4698";
const app = express()
app.get('/4698', handler4698)
app.listen(3000, () => {})
        