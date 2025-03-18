
const express = require('express')
import {handler4433} from "./handler4433";
const app = express()
app.get('/4433', handler4433)
app.listen(3000, () => {})
        