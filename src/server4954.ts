
const express = require('express')
import {handler4954} from "./handler4954";
const app = express()
app.get('/4954', handler4954)
app.listen(3000, () => {})
        