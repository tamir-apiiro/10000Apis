
const express = require('express')
import {handler3847} from "./handler3847";
const app = express()
app.get('/3847', handler3847)
app.listen(3000, () => {})
        