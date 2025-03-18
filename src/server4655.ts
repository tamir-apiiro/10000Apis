
const express = require('express')
import {handler4655} from "./handler4655";
const app = express()
app.get('/4655', handler4655)
app.listen(3000, () => {})
        