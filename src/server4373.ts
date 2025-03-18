
const express = require('express')
import {handler4373} from "./handler4373";
const app = express()
app.get('/4373', handler4373)
app.listen(3000, () => {})
        